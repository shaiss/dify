import { useCallback, useMemo } from 'react'
import produce from 'immer'
import { useStoreApi } from 'reactflow'
import type { ValueSelector, Var } from '../../types'
import { VarType } from '../../types'
import { getOperators } from '../if-else/utils'
import type { Condition, Limit, ListFilterNodeType, OrderBy } from './types'
import useNodeCrud from '@/app/components/workflow/nodes/_base/hooks/use-node-crud'
import {
  useIsChatMode,
  useNodesReadOnly,
  useWorkflow,
  useWorkflowVariables,
} from '@/app/components/workflow/hooks'

const useConfig = (id: string, payload: ListFilterNodeType) => {
  const { nodesReadOnly: readOnly } = useNodesReadOnly()
  const isChatMode = useIsChatMode()

  const store = useStoreApi()
  const { getBeforeNodesInSameBranch } = useWorkflow()

  const {
    getNodes,
  } = store.getState()
  const currentNode = getNodes().find(n => n.id === id)
  const isInIteration = payload.isInIteration
  const iterationNode = isInIteration ? getNodes().find(n => n.id === currentNode!.parentId) : null
  const availableNodes = useMemo(() => {
    return getBeforeNodesInSameBranch(id)
  }, [getBeforeNodesInSameBranch, id])

  const { inputs, setInputs } = useNodeCrud<ListFilterNodeType>(id, payload)

  const { getCurrentVariableType } = useWorkflowVariables()
  const getType = useCallback((variable?: ValueSelector) => {
    const varType = getCurrentVariableType({
      parentNode: iterationNode,
      valueSelector: variable || inputs.variable || [],
      availableNodes,
      isChatMode,
      isConstant: false,
    })
    let itemVarType = VarType.string
    switch (varType) {
      case VarType.arrayNumber:
        itemVarType = VarType.number
        break
      case VarType.arrayString:
        itemVarType = VarType.string
        break
      case VarType.arrayFile:
        itemVarType = VarType.file
        break
      case VarType.arrayObject:
        itemVarType = VarType.object
        break
      default:
        itemVarType = varType
    }
    return { varType, itemVarType }
  }, [availableNodes, getCurrentVariableType, inputs.variable, isChatMode, iterationNode])

  const { varType, itemVarType } = getType()

  const hasSubVariable = [VarType.arrayFile].includes(varType)

  const handleVarChanges = useCallback((variable: ValueSelector | string) => {
    const newInputs = produce(inputs, (draft) => {
      draft.variable = variable as ValueSelector
      const { varType, itemVarType } = getType(draft.variable)
      const isFileArray = varType === VarType.arrayFile

      draft.filter_by = [{
        key: isFileArray ? 'name' : '',
        comparison_operator: getOperators(itemVarType, isFileArray ? { key: 'name' } : undefined)[0],
        value: '',
      }]
    })
    setInputs(newInputs)
  }, [getType, inputs, setInputs])

  const filterVar = useCallback((varPayload: Var) => {
    // Don't know the item struct of VarType.arrayObject, so not support it
    return [VarType.arrayNumber, VarType.arrayString, VarType.arrayFile].includes(varPayload.type)
  }, [])

  const handleFilterChange = useCallback((condition: Condition) => {
    const newInputs = produce(inputs, (draft) => {
      draft.filter_by[0] = condition
    })
    setInputs(newInputs)
  }, [inputs, setInputs])

  const handleLimitChange = useCallback((limit: Limit) => {
    const newInputs = produce(inputs, (draft) => {
      draft.limit = limit
    })
    setInputs(newInputs)
  }, [inputs, setInputs])

  const handleOrderByEnabledChange = useCallback((enabled: boolean) => {
    const newInputs = produce(inputs, (draft) => {
      draft.order_by.enabled = enabled
    })
    setInputs(newInputs)
  }, [inputs, setInputs])

  const handleOrderByTypeChange = useCallback((type: OrderBy) => {
    return () => {
      const newInputs = produce(inputs, (draft) => {
        draft.order_by.value = type
      })
      setInputs(newInputs)
    }
  }, [inputs, setInputs])

  return {
    readOnly,
    inputs,
    filterVar,
    varType,
    itemVarType,
    hasSubVariable,
    handleVarChanges,
    handleFilterChange,
    handleLimitChange,
    handleOrderByEnabledChange,
    handleOrderByTypeChange,
  }
}

export default useConfig
