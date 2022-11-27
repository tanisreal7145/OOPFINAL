import csv
import json
path = "S:/Files/siim-covid19-detection/REALFINALREAL/realforrealandfinal/src/sample_submission.csv"

#เอา Row มาก่อน
result0 = []

#ตัด _ ออก
result1 = []

# ตัดช่องว่างออก
result2 = []


count_negative = 0
count_none = 0
count_study = 0
count_image = 0

count_first_number =  0
count_second_number = 0
count_third_number =  0
count_forth_number =  0
count_fifth_number =  0

with open(path) as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        result0.append(row)


for i in result0:
    for j in i:
        result1.append(j.split("_"))

for i in result1:
    for j in i:
       result2.append(j.split(" "))


for i in result2:
    for j in i:
        if(j == 'negative'):
            count_negative+=1
        if(j == 'none'):
            count_none+=1
        if(j == 'study'):
            count_study+=1
        if(j == 'image'):
            count_image+=1


for i in range(4,len(result2),3):
    if(result2[i][1] == '1'):
        count_first_number+=1
    if(result2[i][2] == '0'):
        count_second_number+=1
    if(result2[i][3] == '0'):
        count_third_number+=1
    if(result2[i][4] == '1'):
        count_forth_number+=1
    if(result2[i][5] == '1'):
        count_fifth_number+=1

dic = {
    "Negative": str(count_negative),
    "None":  str(count_none),
    "Study":  str(count_study),
    "Image":  str(count_image),
    "First_number_col":  str(count_first_number),
    "Second_number_col":  str(count_second_number),
    "Third_number_col": str(count_third_number),
    "Forth_number_col": str(count_forth_number),
    "Fifth_number_col": str(count_fifth_number)
}

json_object = json.dumps(dic,indent=4)
with open("src/negative_none.json","w",encoding='utf-8') as write_file:
    write_file.write(json_object)