name = input("Enter your name : ")

if len(name) < 3:
    print("the name is too short")
elif len(name) > 60:
    print("the name is too long")
else:
    print("valid name")