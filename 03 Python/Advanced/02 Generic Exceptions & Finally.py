income = 0
try:
    income = int(input("enter your income :"))
    months = int(input("enter your months :"))
    monthly_income = income / months
    print(monthly_income)
# except ValueError:
#     print("please enter right values")

# except ZeroDivisionError:
#     print("the month should not be zero")

except Exception:
    print("Generic Exception")
finally:
    print("code in finally block")