var str1 = prompt("Enter the string");
var str2 = prompt("Enter the string you want to check");
if (str1.substring(1,4)===str2)
{
    document.write(true);
}
else
{
    document.write(false);
}