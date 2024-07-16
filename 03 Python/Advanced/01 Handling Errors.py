income = 0
try:
    income = int(input("enter your income :"))
except ValueError:
    print("please enter right values")
print(income)