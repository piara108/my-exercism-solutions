# High Scores

def latest(scores):
    return scores[len(scores) - 1]

def personal_best(scores):
    highest_score = 0

    for scr in scores:
        if scr > highest_score: highest_score = scr

    return highest_score

def personal_top_three(scores):
    scores.sort(reverse = True)
    
    return scores[0:3]
