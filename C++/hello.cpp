#include <iostream>
using namespace std;

int main()
{
  char button;
  cout << "Enter a letter: " << endl;
  cin >> button;

  switch (button)
  {
  case 'a':
    cout << "Hello" << endl;
    break;

  case 'b':
    cout << "Namaste" << endl;
    break;

  case 'c':
    cout << "Salut" << endl;
    break;

  case 'd':
    cout << "hola" << endl;
    break;

  case 'e':
    cout << "Ciao" << endl;
    break;

  default:
    cout << "Enter a propper value" << endl;
    break;
  }

  return 0;
}