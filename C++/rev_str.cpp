#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char words[] = "Anish";

    int nChars = sizeof(words) -1 ;

    char *pStart = words;
    char *pEnd = words + nChars - 1;
    // cout << *pStart << endl;
    // cout << *pEnd;
    while (pStart < pEnd) 
    {
        char temp = *pStart;
        *pStart = *pEnd;
        *pEnd = temp;
        pStart++;
        pEnd--;       

    }

    cout << words << endl;
    return 0;
}