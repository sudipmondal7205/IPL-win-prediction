from django.shortcuts import render, HttpResponse
import pickle
import numpy as np
import pandas as pd
# Create your views here.

model = pickle.load(open('Prediction_Model/IPL_Model.pkl', 'rb'))

def about(request):
    return render(request, 'about.html')

def index(request):
    teams = ["Chennai Super Kings", "Delhi Capitals", "Gujarat Titans", 
             "Kolkata Knight Riders", "Lucknow Super Giants", 
             "Mumbai Indians", "Royal Challengers Bangalore", 
             "Sunrisers Hyderabad"]
    
    batting_team = 'Batting Team'
    bowling_team = 'Bowling Team'
    bowling_team_win = 0
    batting_team_win = 0
    if request.method == 'POST':
        batting_team = request.POST.get('batting_team')
        bowling_team = request.POST.get('bowling_team')
        inning = request.POST.get('inning')
        over = request.POST.get('over')
        balls = request.POST.get('ball')
        runs = request.POST.get('runs')
        wickets = request.POST.get('wickets')
        against_run = request.POST.get('target')

        if against_run == None:
            against_run = 0
        
        if batting_team == bowling_team:
            return HttpResponse("Please select different teams")
        
        print('batting team : ', batting_team)
        print('bowling team : ', bowling_team)
        print('inning : ', inning)
        print('over : ', over)
        print('balls : ', balls)
        print('wickets : ', wickets)
        print('runs : ', runs)
        print('against run : ', against_run)
        input = pd.DataFrame(np.array([batting_team, bowling_team, inning, over, balls, wickets, runs, against_run]).reshape(1, -1), columns=['batting_team','bowling_team', 'inning', 'over', 'ball', 'wickets', 'runs', 'against_run'])
        prediction = model.predict_proba(input)
        print(prediction)
        batting_team_win = round(prediction[0][0] * 100, ndigits=0)
        bowling_team_win = round(prediction[0][1] * 100, ndigits=0)
    context = {
        'team1_name':batting_team,
        'team1_win':batting_team_win,
        'team2_name':bowling_team,
        'team2_win':bowling_team_win,
        "teams": teams
    }
    return render(request, "index.html", context)

