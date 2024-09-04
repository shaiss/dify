const translation = {
  api: {
    success: 'सफलता',
    actionSuccess: 'कार्रवाई सफल रही',
    saved: 'सहेजा गया',
    create: 'बनाया गया',
    remove: 'हटाया गया',
  },
  operation: {
    create: 'बनाएं',
    confirm: 'पुष्टि करें',
    cancel: 'रद्द करें',
    clear: 'साफ करें',
    save: 'सहेजें',
    saveAndEnable: 'सहेजें और सक्षम करें',
    edit: 'संपादित करें',
    add: 'जोड़ें',
    added: 'जोड़ा गया',
    refresh: 'पुनः प्रारंभ करें',
    reset: 'रीसेट करें',
    search: 'खोजें',
    change: 'बदलें',
    remove: 'हटाएं',
    send: 'भेजें',
    copy: 'कॉपी करें',
    lineBreak: 'लाइन ब्रेक',
    sure: 'मुझे यकीन है',
    download: 'डाउनलोड करें',
    delete: 'हटाएं',
    settings: 'सेटिंग्स',
    setup: 'सेटअप',
    getForFree: 'मुफ्त में प्राप्त करें',
    reload: 'पुनः लोड करें',
    ok: 'ठीक है',
    log: 'लॉग',
    learnMore: 'अधिक जानें',
    params: 'पैरामीटर',
    duplicate: 'डुप्लिकेट',
    rename: 'नाम बदलें',
  },
  errorMsg: {
    fieldRequired: '{{field}} आवश्यक है',
    urlError: 'url को http:// या https:// से शुरू होना चाहिए',
  },
  placeholder: {
    input: 'कृपया दर्ज करें',
    select: 'कृपया चयन करें',
  },
  voice: {
    language: {
      zhHans: 'चीनी',
      zhHant: 'पारंपरिक चीनी',
      enUS: 'अंग्रेज़ी',
      deDE: 'जर्मन',
      frFR: 'फ्रेंच',
      esES: 'स्पेनिश',
      itIT: 'इतालवी',
      thTH: 'थाई',
      idID: 'इंडोनेशियाई',
      jaJP: 'जापानी',
      koKR: 'कोरियाई',
      ptBR: 'पुर्तगाली',
      ruRU: 'रूसी',
      ukUA: 'यूक्रेनी',
      viVN: 'वियतनामी',
      plPL: 'पोलिश',
      roRO: 'रोमानियाई',
      hiIN: 'हिन्दी',
      trTR: 'तुर्की',
      faIR: 'फ़ारसी',
    },
  },
  unit: {
    char: 'वर्ण',
  },
  actionMsg: {
    noModification: 'इस समय कोई संशोधन नहीं।',
    modifiedSuccessfully: 'सफलतापूर्वक संशोधित किया गया',
    modifiedUnsuccessfully: 'संशोधन असफल रहा',
    copySuccessfully: 'सफलतापूर्वक कॉपी किया गया',
    paySucceeded: 'भुगतान सफल रहा',
    payCancelled: 'भुगतान रद्द कर दिया गया',
    generatedSuccessfully: 'सफलतापूर्वक उत्पन्न हुआ',
    generatedUnsuccessfully: 'उत्पन्न असफल रहा',
  },
  model: {
    params: {
      temperature: 'तापमान',
      temperatureTip:
        'अनियमितता को नियंत्रित करता है: कम करने से कम अनियमित पूर्णताएं होती हैं। जैसे ही तापमान शून्य के करीब आता है, मॉडल निर्धारक और दोहराव वाला हो जाएगा।',
      top_p: 'टॉप P',
      top_pTip:
        'नाभिक नमूनाकरण के माध्यम से विविधता को नियंत्रित करता है: 0.5 का मतलब है कि सभी संभाव्यता-भारित विकल्पों में से आधे को माना जाता है।',
      presence_penalty: 'उपस्थिति दंड',
      presence_penaltyTip:
        'नए टोकनों को दंडित करने की मात्रा इस पर आधारित है कि वे अब तक के पाठ में दिखाई देते हैं या नहीं।\nयह मॉडल की संभावना को नए विषयों पर बात करने के लिए बढ़ाता है।',
      frequency_penalty: 'आवृत्ति दंड',
      frequency_penaltyTip:
        'नए टोकनों को दंडित करने की मात्रा इस पर आधारित है कि वे अब तक के पाठ में कितनी बार दिखाई दिए हैं।\nयह मॉडल की संभावना को एक ही पंक्ति को शब्दशः दोहराने की संभावना को कम करता है।',
      max_tokens: 'अधिकतम टोकन',
      max_tokensTip:
        'प्रतिक्रिया की अधिकतम लंबाई को टोकनों में सीमित करने के लिए उपयोग किया जाता है। \nबड़ी मानों से प्रॉम्प्ट शब्दों, चैट लॉग्स और ज्ञान के लिए छोड़ी गई जगह सीमित हो सकती है। \nइसे दो-तिहाई से नीचे सेट करने की सिफारिश की जाती है\ngpt-4-1106-preview, gpt-4-vision-preview अधिकतम टोकन (इनपुट 128k आउटपुट 4k)',
      maxTokenSettingTip:
        'आपकी अधिकतम टोकन सेटिंग उच्च है, जो प्रॉम्प्ट, क्वेरी और डेटा के लिए जगह को सीमित कर सकती है। इसे 2/3 से नीचे सेट करने पर विचार करें।',
      setToCurrentModelMaxTokenTip:
        'अधिकतम टोकन को वर्तमान मॉडल {{maxToken}} के 80% अधिकतम टोकन पर अपडेट किया गया है।',
      stop_sequences: 'रोकने का अनुक्रम',
      stop_sequencesTip:
        'चार अनुक्रमों तक जहां API आगे के टोकन उत्पन्न करना बंद कर देगा। लौटाए गए पाठ में स्टॉप अनुक्रम शामिल नहीं होगा।',
      stop_sequencesPlaceholder: 'अनुक्रम दर्ज करें और टैब दबाएं',
    },
    tone: {
      Creative: 'रचनात्मक',
      Balanced: 'संतुलित',
      Precise: 'सटीक',
      Custom: 'कस्टम',
    },
    addMoreModel: 'अधिक मॉडल जोड़ने के लिए सेटिंग्स पर जाएं',
  },
  menus: {
    status: 'बीटा',
    explore: 'अन्वेषण करें',
    apps: 'स्टूडियो',
    plugins: 'प्लगइन्स',
    pluginsTips:
      'थर्ड-पार्टी प्लगइन्स को एकीकृत करें या ChatGPT-संगत AI-Plugins बनाएं।',
    datasets: 'ज्ञान',
    datasetsTips:
      'जल्द आ रहा है: अपने स्वयं के टेक्स्ट डेटा आयात करें या LLM संदर्भ संवर्धन के लिए रियल-टाइम में वेबहुक के माध्यम से डेटा लिखें।',
    newApp: 'नया ऐप',
    newDataset: 'ज्ञान बनाएं',
    tools: 'उपकरण',
  },
  userProfile: {
    settings: 'सेटिंग्स',
    emailSupport: 'सहायता',
    workspace: 'वर्कस्पेस',
    createWorkspace: 'वर्कस्पेस बनाएं',
    helpCenter: 'सहायता',
    communityFeedback: 'प्रतिक्रिया',
    roadmap: 'रोडमैप',
    community: 'समुदाय',
    about: 'के बारे में',
    logout: 'लॉग आउट',
  },
  settings: {
    accountGroup: 'खाता',
    workplaceGroup: 'कार्यस्थल',
    account: 'मेरा खाता',
    members: 'सदस्य',
    billing: 'बिलिंग',
    integrations: 'एकीकरण',
    language: 'भाषा',
    provider: 'मॉडल प्रदाता',
    dataSource: 'डेटा स्रोत',
    plugin: 'प्लगइन्स',
    apiBasedExtension: 'API विस्तार',
  },
  account: {
    avatar: 'अवतार',
    name: 'नाम',
    email: 'ईमेल',
    password: 'पासवर्ड',
    passwordTip:
      'यदि आप अस्थायी लॉगिन कोड का उपयोग नहीं करना चाहते हैं तो आप एक स्थायी पासवर्ड सेट कर सकते हैं',
    setPassword: 'पासवर्ड सेट करें',
    resetPassword: 'पासवर्ड रीसेट करें',
    currentPassword: 'वर्तमान पासवर्ड',
    newPassword: 'नया पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    notEqual: 'दो पासवर्ड अलग हैं।',
    langGeniusAccount: 'Dify खाता',
    langGeniusAccountTip: 'आपका Dify खाता और संबंधित उपयोगकर्ता डेटा।',
    editName: 'नाम संपादित करें',
    showAppLength: '{{length}} ऐप्स दिखाएं',
  },
  members: {
    team: 'टीम',
    invite: 'जोड़ें',
    name: 'नाम',
    lastActive: 'अंतिम सक्रियता',
    role: 'भूमिकाएं',
    pending: 'लंबित...',
    owner: 'मालिक',
    admin: 'प्रशासक',
    adminTip: 'ऐप्स बना सकते हैं और टीम सेटिंग्स का प्रबंधन कर सकते हैं',
    normal: 'सामान्य',
    normalTip: 'केवल ऐप्स का उपयोग कर सकते हैं, ऐप्स नहीं बना सकते',
    builder: 'निर्माता',
    builderTip: 'अपने स्वयं के ऐप्स बना और संपादित कर सकते हैं',
    editor: 'संपादक',
    editorTip: 'ऐप्स बना और संपादित कर सकते हैं',
    inviteTeamMember: 'टीम सदस्य जोड़ें',
    inviteTeamMemberTip:
      'वे साइन इन करने के बाद सीधे आपकी टीम डेटा तक पहुंच सकते हैं।',
    email: 'ईमेल',
    emailInvalid: 'अवैध ईमेल प्रारूप',
    emailPlaceholder: 'कृपया ईमेल दर्ज करें',
    sendInvite: 'आमंत्रण भेजें',
    invitedAsRole: '{{role}} उपयोगकर्ता के रूप में आमंत्रित किया गया',
    invitationSent: 'आमंत्रण भेजा गया',
    invitationSentTip:
      'आमंत्रण भेजा गया, और वे साइन इन करके आपकी टीम डेटा तक पहुंच सकते हैं।',
    invitationLink: 'आमंत्रण लिंक',
    failedinvitationEmails:
      'नीचे दिए गए उपयोगकर्ताओं को सफलतापूर्वक आमंत्रित नहीं किया गया',
    ok: 'ठीक है',
    removeFromTeam: 'टीम से हटाएं',
    removeFromTeamTip: 'टीम पहुंच को हटा देगा',
    setAdmin: 'प्रशासक के रूप में सेट करें',
    setMember: 'सामान्य सदस्य के रूप में सेट करें',
    setBuilder: 'निर्माता के रूप में सेट करें',
    setEditor: 'संपादक के रूप में सेट करें',
    disinvite: 'आमंत्रण रद्द करें',
    deleteMember: 'सदस्य को हटाएं',
    you: '(आप)',
  },
  integrations: {
    connected: 'कनेक्टेड',
    google: 'गूगल',
    googleAccount: 'गूगल खाते के साथ लॉगिन करें',
    github: 'GitHub',
    githubAccount: 'GitHub खाते के साथ लॉगिन करें',
    connect: 'कनेक्ट करें',
  },
  language: {
    displayLanguage: 'प्रदर्शन भाषा',
    timezone: 'समय क्षेत्र',
  },
  provider: {
    apiKey: 'एपीआई कुंजी',
    enterYourKey: 'अपनी एपीआई कुंजी यहां दर्ज करें',
    invalidKey: 'अमान्य OpenAI एपीआई कुंजी',
    validatedError: 'सत्यापन विफल: ',
    validating: 'कुंजी का सत्यापन हो रहा है...',
    saveFailed: 'एपीआई कुंजी सहेजना विफल रहा',
    apiKeyExceedBill: 'इस एपीआई कुंजी में कोई कोटा उपलब्ध नहीं है, कृपया पढ़ें',
    addKey: 'कुंजी जोड़ें',
    comingSoon: 'जल्द आ रहा है',
    editKey: 'संपादित करें',
    invalidApiKey: 'अमान्य एपीआई कुंजी',
    azure: {
      apiBase: 'एपीआई आधार',
      apiBasePlaceholder: 'आपके Azure OpenAI एंडपॉइंट का एपीआई आधार URL।',
      apiKey: 'एपीआई कुंजी',
      apiKeyPlaceholder: 'अपनी एपीआई कुंजी यहां दर्ज करें',
      helpTip: 'Azure OpenAI सेवा के बारे में जानें',
    },
    openaiHosted: {
      openaiHosted: 'होस्टेड OpenAI',
      onTrial: 'परीक्षण पर',
      exhausted: 'कोटा समाप्त',
      desc: 'Dify द्वारा प्रदान की गई OpenAI होस्टिंग सेवा आपको GPT-3.5 जैसे मॉडल का उपयोग करने की अनुमति देती है। आपके परीक्षण कोटा के समाप्त होने से पहले, आपको अन्य मॉडल प्रदाताओं को सेट करने की आवश्यकता है।',
      callTimes: 'कॉल बार',
      usedUp: 'परीक्षण कोटा समाप्त हो गया। अपना मॉडल प्रदाता जोड़ें।',
      useYourModel: 'वर्तमान में अपना मॉडल प्रदाता उपयोग कर रहे हैं।',
      close: 'बंद करें',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'परीक्षण पर',
      exhausted: 'कोटा समाप्त',
      desc: 'शक्तिशाली मॉडल, जो परिष्कृत संवाद और रचनात्मक सामग्री निर्माण से लेकर विस्तृत निर्देश तक की विस्तृत श्रेणी के कार्यों में उत्कृष्ट है।',
      callTimes: 'कॉल बार',
      usedUp: 'परीक्षण कोटा समाप्त हो गया। अपना मॉडल प्रदाता जोड़ें।',
      useYourModel: 'वर्तमान में अपना मॉडल प्रदाता उपयोग कर रहे हैं।',
      close: 'बंद करें',
    },
    anthropic: {
      using: 'एम्बेडिंग क्षमता का उपयोग कर रहा है',
      enableTip:
        'Anthropic मॉडल को सक्षम करने के लिए, आपको पहले OpenAI या Azure OpenAI सेवा से जुड़ने की आवश्यकता है।',
      notEnabled: 'सक्षम नहीं',
      keyFrom: 'Anthropic से अपनी एपीआई कुंजी प्राप्त करें',
    },
    encrypted: {
      front: 'आपकी एपीआई कुंजी को एन्क्रिप्ट किया जाएगा और संग्रहीत किया जाएगा',
      back: ' तकनीक का उपयोग करके।',
    },
  },
  modelProvider: {
    notConfigured:
      'सिस्टम मॉडल को अभी पूरी तरह से कॉन्फ़िगर नहीं किया गया है, और कुछ कार्य उपलब्ध नहीं हो सकते हैं।',
    systemModelSettings: 'सिस्टम मॉडल सेटिंग्स',
    systemModelSettingsLink: 'सिस्टम मॉडल सेट करना क्यों आवश्यक है?',
    selectModel: 'अपने मॉडल का चयन करें',
    setupModelFirst: 'कृपया पहले अपना मॉडल सेट करें',
    systemReasoningModel: {
      key: 'सिस्टम तर्क मॉडल',
      tip: 'ऐप्लिकेशन बनाने के लिए उपयोग किए जाने वाले डिफ़ॉल्ट अनुमान मॉडल को सेट करें, साथ ही संवाद नाम पीढ़ी और अगले प्रश्न सुझाव जैसी सुविधाएँ भी डिफ़ॉल्ट अनुमान मॉडल का उपयोग करेंगी।',
    },
    embeddingModel: {
      key: 'एंबेडिंग मॉडल',
      tip: 'ज्ञान के दस्तावेज़ एंबेडिंग प्रोसेसिंग के लिए डिफ़ॉल्ट मॉडल सेट करें, ज्ञान की पुनः प्राप्ति और आयात दोनों के लिए इस एंबेडिंग मॉडल का उपयोग वेक्टराइजेशन प्रोसेसिंग के लिए किया जाता है। स्विच करने से आयातित ज्ञान और प्रश्न के बीच वेक्टर आयाम असंगत हो जाएगा, जिससे पुनः प्राप्ति विफल हो जाएगी। पुनः प्राप्ति विफलता से बचने के लिए, कृपया इस मॉडल को मनमाने ढंग से स्विच न करें।',
      required: 'एंबेडिंग मॉडल आवश्यक है',
    },
    speechToTextModel: {
      key: 'भाषण-से-पाठ मॉडल',
      tip: 'संवाद में भाषण-से-पाठ इनपुट के लिए डिफ़ॉल्ट मॉडल सेट करें।',
    },
    ttsModel: {
      key: 'पाठ-से-भाषण मॉडल',
      tip: 'संवाद में पाठ-से-भाषण इनपुट के लिए डिफ़ॉल्ट मॉडल सेट करें।',
    },
    rerankModel: {
      key: 'रीरैंक मॉडल',
      tip: 'रीरैंक मॉडल उपयोगकर्ता प्रश्न के साथ सांविधिक मेल के आधार पर उम्मीदवार दस्तावेज़ सूची को पुनः क्रमित करेगा, सांविधिक रैंकिंग के परिणामों में सुधार करेगा।',
    },
    apiKey: 'API-KEY',
    quota: 'कोटा',
    searchModel: 'खोज मॉडल',
    noModelFound: '{{model}} के लिए कोई मॉडल नहीं मिला',
    models: 'मॉडल्स',
    showMoreModelProvider: 'अधिक मॉडल प्रदाता दिखाएं',
    selector: {
      tip: 'इस मॉडल को हटा दिया गया है। कृपया एक मॉडल जोड़ें या किसी अन्य मॉडल का चयन करें।',
      emptyTip: 'कोई उपलब्ध मॉडल नहीं',
      emptySetting: 'कॉन्फ़िगर करने के लिए कृपया सेटिंग्स पर जाएं',
      rerankTip: 'कृपया रीरैंक मॉडल सेट करें',
    },
    card: {
      quota: 'कोटा',
      onTrial: 'परीक्षण पर',
      paid: 'भुगतान किया हुआ',
      quotaExhausted: 'कोटा समाप्त',
      callTimes: 'कॉल समय',
      tokens: 'टोकन',
      buyQuota: 'कोटा खरीदें',
      priorityUse: 'प्राथमिकता उपयोग',
      removeKey: 'API कुंजी निकालें',
      tip: 'भुगतान किए गए कोटा को प्राथमिकता दी जाएगी। भुगतान किए गए कोटा के समाप्त होने के बाद परीक्षण कोटा का उपयोग किया जाएगा।',
    },
    item: {
      deleteDesc:
        '{{modelName}} को सिस्टम तर्क मॉडल के रूप में उपयोग किया जा रहा है। हटाने के बाद कुछ कार्य उपलब्ध नहीं होंगे। कृपया पुष्टि करें।',
      freeQuota: 'मुफ्त कोटा',
    },
    addApiKey: 'अपनी API कुंजी जोड़ें',
    invalidApiKey: 'अवैध API कुंजी',
    encrypted: {
      front: 'आपकी API KEY को एन्क्रिप्ट और संग्रहीत किया जाएगा',
      back: ' तकनीक का उपयोग करके।',
    },
    freeQuota: {
      howToEarn: 'कैसे कमाएं',
    },
    addMoreModelProvider: 'अधिक मॉडल प्रदाता जोड़ें',
    addModel: 'मॉडल जोड़ें',
    modelsNum: '{{num}} मॉडल्स',
    showModels: 'मॉडल्स दिखाएं',
    showModelsNum: '{{num}} मॉडल्स दिखाएं',
    collapse: 'संक्षिप्त करें',
    config: 'कॉन्फ़िग',
    modelAndParameters: 'मॉडल और पैरामीटर',
    model: 'मॉडल',
    featureSupported: '{{feature}} समर्थित',
    callTimes: 'कॉल समय',
    credits: 'संदेश क्रेडिट्स',
    buyQuota: 'कोटा खरीदें',
    getFreeTokens: 'मुफ्त टोकन प्राप्त करें',
    priorityUsing: 'प्राथमिकता का उपयोग',
    deprecated: 'अप्रचलित',
    confirmDelete: 'हटाने की पुष्टि करें?',
    quotaTip: 'बचे हुए उपलब्ध मुफ्त टोकन',
    loadPresets: 'प्रस्ताव प्रस्तुत करें',
    parameters: 'पैरामीटर',
    loadBalancing: 'लोड बैलेंसिंग',
    loadBalancingDescription: 'कई सेट्स की साख के साथ दबाव कम करें।',
    loadBalancingHeadline: 'लोड बैलेंसिंग',
    configLoadBalancing: 'लोड बैलेंसिंग कॉन्फ़िग करें',
    modelHasBeenDeprecated: 'यह मॉडल अप्रचलित हो गया है',
    providerManaged: 'प्रदाता प्रबंधित',
    providerManagedDescription:
      'मॉडल प्रदाता द्वारा प्रदान की गई एकल सेट की साख का उपयोग करें।',
    defaultConfig: 'डिफ़ॉल्ट कॉन्फ़िग',
    apiKeyStatusNormal: 'APIKey की स्थिति सामान्य है',
    apiKeyRateLimit: 'रेट सीमा पहुंच गई, {{seconds}}s के बाद उपलब्ध',
    addConfig: 'कॉन्फ़िग जोड़ें',
    editConfig: 'कॉन्फ़िग संपादित करें',
    loadBalancingLeastKeyWarning:
      'लोड बैलेंसिंग सक्षम करने के लिए कम से कम 2 कुंजियों को सक्षम होना चाहिए।',
    loadBalancingInfo:
      'डिफ़ॉल्ट रूप से, लोड बैलेंसिंग राउंड-रॉबिन रणनीति का उपयोग करता है। यदि रेट लिमिटिंग ट्रिगर हो जाती है, तो 1 मिनट का कूलडाउन पीरियड लागू होगा।',
    upgradeForLoadBalancing:
      'लोड बैलेंसिंग सक्षम करने के लिए अपनी योजना अपग्रेड करें।',
  },
  dataSource: {
    add: 'डेटा स्रोत जोड़ें',
    connect: 'कनेक्ट करें',
    configure: 'कॉन्फ़िगर करें',
    notion: {
      title: 'Notion',
      description: 'ज्ञान के लिए डेटा स्रोत के रूप में Notion का उपयोग करना।',
      connectedWorkspace: 'कनेक्टेड कार्यस्थान',
      addWorkspace: 'कार्यस्थान जोड़ें',
      connected: 'कनेक्टेड',
      disconnected: 'डिस्कनेक्टेड',
      changeAuthorizedPages: 'अधिकृत पृष्ठ बदलें',
      pagesAuthorized: 'अधिकृत पृष्ठ',
      sync: 'सिंक करें',
      remove: 'हटाएं',
      selector: {
        pageSelected: 'चयनित पृष्ठ',
        searchPages: 'पृष्ठ खोजें...',
        noSearchResult: 'कोई खोज परिणाम नहीं',
        addPages: 'पृष्ठ जोड़ें',
        preview: 'पूर्वावलोकन',
      },
    },
    website: {
      title: 'वेबसाइट',
      description: 'वेब क्रॉलर का उपयोग करके वेबसाइटों से सामग्री आयात करें।',
      with: 'के साथ',
      configuredCrawlers: 'कॉन्फ़िगर किए गए क्रॉलर',
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'एपीआई कुंजी',
      apiKeyPlaceholder: 'अपनी एपीआई कुंजी दर्ज करें',
      keyFrom: 'SerpAPI खाता पृष्ठ से अपनी SerpAPI कुंजी प्राप्त करें',
    },
  },
  apiBasedExtension: {
    title:
      'एपीआई एक्सटेंशन केंद्रीकृत एपीआई प्रबंधन प्रदान करते हैं, जो Dify के अनुप्रयोगों में आसान उपयोग के लिए कॉन्फ़िगरेशन को सरल बनाते हैं।',
    link: 'अपना खुद का एपीआई एक्सटेंशन कैसे विकसित करें, यह जानें।',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'एपीआई एक्सटेंशन जोड़ें',
    selector: {
      title: 'एपीआई एक्सटेंशन',
      placeholder: 'कृपया एपीआई एक्सटेंशन चुनें',
      manage: 'एपीआई एक्सटेंशन प्रबंधित करें',
    },
    modal: {
      title: 'एपीआई एक्सटेंशन जोड़ें',
      editTitle: 'एपीआई एक्सटेंशन संपादित करें',
      name: {
        title: 'नाम',
        placeholder: 'कृपया नाम दर्ज करें',
      },
      apiEndpoint: {
        title: 'एपीआई एंडपॉइंट',
        placeholder: 'कृपया एपीआई एंडपॉइंट दर्ज करें',
      },
      apiKey: {
        title: 'एपीआई-कुंजी',
        placeholder: 'कृपया एपीआई-कुंजी दर्ज करें',
        lengthError: 'एपीआई-कुंजी की लंबाई 5 अक्षरों से कम नहीं हो सकती',
      },
    },
    type: 'प्रकार',
  },
  about: {
    changeLog: 'परिवर्तन लॉग',
    updateNow: 'अभी अपडेट करें',
    nowAvailable: 'Dify {{version}} अब उपलब्ध है।',
    latestAvailable: 'Dify {{version}} नवीनतम उपलब्ध संस्करण है।',
  },
  appMenus: {
    overview: 'निगरानी',
    promptEng: 'समन्वय करें',
    apiAccess: 'API एक्सेस',
    logAndAnn: 'लॉग्स और घोषणाएँ',
    logs: 'लॉग्स',
  },
  environment: {
    testing: 'परीक्षण',
    development: 'विकास',
  },
  appModes: {
    completionApp: 'पाठ जनरेटर',
    chatApp: 'चैट ऐप',
  },
  datasetMenus: {
    documents: 'दस्तावेज़',
    hitTesting: 'पुनः प्राप्ति परीक्षण',
    settings: 'सेटिंग्स',
    emptyTip:
      'ज्ञान को संबद्ध नहीं किया गया है, कृपया संबद्धता पूरी करने के लिए एप्लिकेशन या प्लग-इन पर जाएं।',
    viewDoc: 'दस्तावेज़ देखें',
    relatedApp: 'संबंधित ऐप्स',
  },
  voiceInput: {
    speaking: 'अब बोलें...',
    converting: 'पाठ में परिवर्तित हो रहा है...',
    notAllow: 'माइक्रोफोन अधिकृत नहीं है',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'संवाद का नाम बदलें',
    conversationName: 'संवाद का नाम',
    conversationNamePlaceholder: 'कृपया संवाद का नाम दर्ज करें',
    conversationNameCanNotEmpty: 'संवाद का नाम आवश्यक है',
    citation: {
      title: 'उद्धरण',
      linkToDataset: 'ज्ञान से लिंक करें',
      characters: 'वर्ण:',
      hitCount: 'पुनः प्राप्ति गिनती:',
      vectorHash: 'वेक्टर हैश:',
      hitScore: 'पुनः प्राप्ति स्कोर:',
    },
  },
  promptEditor: {
    placeholder:
      'अपना प्रॉम्प्ट शब्द यहां लिखें, वेरिएबल डालने के लिए \'{\' दर्ज करें, प्रॉम्प्ट सामग्री ब्लॉक डालने के लिए \'/\' दर्ज करें',
    context: {
      item: {
        title: 'संदर्भ',
        desc: 'संदर्भ टेम्पलेट डालें',
      },
      modal: {
        title: 'संदर्भ में {{num}} ज्ञान',
        add: 'संदर्भ जोड़ें',
        footer:
          'आप नीचे दिए गए संदर्भ अनुभाग में संदर्भों का प्रबंधन कर सकते हैं।',
      },
    },
    history: {
      item: {
        title: 'वार्तालाप इतिहास',
        desc: 'ऐतिहासिक संदेश टेम्पलेट डालें',
      },
      modal: {
        title: 'उदाहरण',
        user: 'नमस्ते',
        assistant: 'नमस्ते! मैं आज आपकी कैसे सहायता कर सकता हूं?',
        edit: 'वार्तालाप भूमिका नाम संपादित करें',
      },
    },
    variable: {
      item: {
        title: 'वेरिएबल और बाहरी उपकरण',
        desc: 'वेरिएबल और बाहरी उपकरण डालें',
      },
      outputToolDisabledItem: {
        title: 'वेरिएबल',
        desc: 'वेरिएबल डालें',
      },
      modal: {
        add: 'नया वेरिएबल',
        addTool: 'नया उपकरण',
      },
    },
    query: {
      item: {
        title: 'क्वेरी',
        desc: 'उपयोगकर्ता क्वेरी टेम्पलेट डालें',
      },
    },
    existed: 'पहले से ही प्रॉम्प्ट में मौजूद है',
  },
  imageUploader: {
    uploadFromComputer: 'कंप्यूटर से अपलोड करें',
    uploadFromComputerReadError: 'छवि पढ़ना विफल रहा, कृपया पुनः प्रयास करें।',
    uploadFromComputerUploadError:
      'छवि अपलोड विफल रहा, कृपया फिर से अपलोड करें।',
    uploadFromComputerLimit:
      'अपलोड की गई छवियाँ {{size}} MB से अधिक नहीं हो सकतीं',
    pasteImageLink: 'छवि लिंक पेस्ट करें',
    pasteImageLinkInputPlaceholder: 'छवि लिंक यहाँ पेस्ट करें',
    pasteImageLinkInvalid: 'अमान्य छवि लिंक',
    imageUpload: 'छवि अपलोड',
  },
  tag: {
    placeholder: 'सभी टैग्स',
    addNew: 'नया टैग जोड़ें',
    noTag: 'कोई टैग नहीं',
    noTagYet: 'अभी तक कोई टैग नहीं',
    addTag: 'टैग जोड़ें',
    editTag: 'टैग संपादित करें',
    manageTags: 'टैग प्रबंधित करें',
    selectorPlaceholder: 'खोजने या बनाने के लिए टाइप करें',
    create: 'बनाएं',
    delete: 'टैग हटाएं',
    deleteTip: 'टैग का उपयोग किया जा रहा है, क्या इसे हटाना है?',
    created: 'टैग सफलतापूर्वक बनाया गया',
    failed: 'टैग बनाना असफल रहा',
  },
}

export default translation
