const franc=require("franc")
const langs=require("langs")
const colors=require("colors")

const input=process.argv[2];
const languageCode=franc(input);

if(languageCode==='und')
{
    console.log("Cannot Say".red)
}
else
{
    const language=langs.where("3", languageCode)
    console.log(`It might be: ${language.name}`.green)
}