from flask import Flask, render_template, request, redirect
import pymongo
import json
from bson.objectid import ObjectId
import jyserver

connectionString = "mongodb://Northstar:UYdGLGJ5qHpu9QBe@information-shard-00-00.aqqbz.mongodb.net:27017,information-shard-00-01.aqqbz.mongodb.net:27017,information-shard-00-02.aqqbz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-hjmyx7-shard-0&authSource=admin&retryWrites=true&w=majority"
client = pymongo.MongoClient(connectionString) 
database = client["Citrus"]
collection = database["Stuff"]

app = Flask("citrus")
@app.route('/',methods=['GET','POST'])
def home():
    use_stylesheet=True
    return render_template('home.html')

@app.route('/calculator', methods=['GET','POST'])
def calc():
    docs=collection.find()
    gas=0
    elec=0
    oil=0
    mile=0
    fly1=0
    fly2=0
    x=0
    y=0
    n=0
    for i in docs:
        n=n+1
    if n!=0:
        do=collection.find_one()
        gas=int(do['Gas'])
        elec=int(do['Elec'])
        mile=int(do['Car'])
        fly1=int(do['Fly1'])
        fly2=int(do['Fly2'])
    collection.delete_one({})
    if request.method == 'POST':
        doc = dict(request.form)
        collection.insert_one(doc)
        
        return redirect('/calculator')    
    else:
        use_stylesheet=True
        return render_template('calc.html', docs=docs, gas=gas, elec=elec, mile=mile, fly1=fly1, fly2=fly2, x=x, y=y)

@app.route('/neutral', methods=['GET','POST'])
def neutral():
    use_stylesheet=True
    return render_template('neutral.html')

@app.route('/our-goal', methods=['GET','POST'])
def our_goal():
    return render_template('stars.html')

@app.route('/quiz', methods=['GET','POST'])
def quiz():
    if request.method=='GET':
        return render_template('quiz.html')
    else:
        return redirect('/quiz')

@app.route('/delete/<obj_id>')
def delete(obj_id):
    collection.delete_one({'_id':ObjectId(obj_id)})
    return redirect('/quiz')

# def calculations:
    
use_stylesheet=True
app.run(debug=False)

