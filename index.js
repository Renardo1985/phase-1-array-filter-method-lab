function findMatching(array, string)
{
    return array.filter(item => item.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(array, string)
{
   return array.filter((item) => item.toLowerCase().startsWith(string.toLowerCase()))    
}

function matchName(array, string)
{
   return array.filter(item => item.name.toLowerCase() === string.toLowerCase())    
}
