
function isAnagram(str1, str2)
{
     str1 =  str1.trim().toLowerCase()
     str2 =  str2.trim().toLowerCase()

    if(str1.length !== str2.length){
        console.log("String are not anagram")
        return
    }

    let sortStr1 = str1.split("").sort().join("")
    let sortStr2 = str2.split("").sort().join("")

    if(sortStr1 === sortStr2){
        console.log("String are anagram")
    }else{
    console.log("String are not anagram")
    }


}

isAnagram('listen', 'silent')
isAnagram('hello', 'world')