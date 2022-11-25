// Language
function GetLanguageCode()
{
    if(enabledDefaultLanguage == true)
        return defaultLanguageCode;
    return navigator.language || navigator.userLanguage;
}

// Envorinment
function GetEnvironmentJson()
{
    return JSON.stringify(environment);
}