# The goal of this assignment is to learn about the Naive Bayes Classifier (NBC).   

1. We will use text dataset about the movie review. Your goal is predicting the sentiment. http://ai.stanford.edu/~amaas/data/sentiment/ (Links to an external site.)
2. Divide the dataset as train, development and test. 
3. Build a vocabulary as list. [‘the’ ‘I’ ‘happy’ … ] You may omit rare words for example if the occurrence is less than five times, a reverse index as the key value might be handy
{“the”: 0, “I”:1, “happy”:2 , … }

# Calculate the following probability
1. Probability of the occurrence P[“the”] = num of documents containing ‘the’ / num of all documents
2. Conditional probability based on the sentiment P[“the” | Positive]  = # of positive documents containing “the” / num of all positive review documents

- Calculate accuracy using dev dataset 
- Conduct five fold cross validation

# Do following experiments:
- Compare the effect of Smoothing
- Derive Top 10 words that predicts positive and negative class P[Positive| word] 
- Using the test dataset, Use the optimal hyperparameters you found in the step e, and use it to calculate the final accuracy.  
- Use five fold cross validation for final accuracy.

** unzip the Data folder at same level as the notebook
