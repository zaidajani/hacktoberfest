year = int(input("Enter the year: "))

def leap_check(year: int):
    if year % 4 != 0:
        return False
    if year % 100 == 0 and year % 400 == 0:
        return True
    return False

print(leap_check(year))
