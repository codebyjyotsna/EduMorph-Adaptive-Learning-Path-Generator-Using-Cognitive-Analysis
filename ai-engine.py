import numpy as np
from sklearn.cluster import KMeans

# Mock function to analyze behavior and detect learning style
def detect_learning_style(interactions):
    # Example: Use clustering to group users based on interaction patterns
    data = np.array(interactions)
    kmeans = KMeans(n_clusters=3)  # 3 clusters for visual, auditory, kinesthetic
    kmeans.fit(data)
    cluster = kmeans.predict([data[-1]])[0]
    styles = ['visual', 'auditory', 'kinesthetic']
    return styles[cluster]

# Mock function to suggest content format based on learning style
def suggest_format(style):
    format_map = {
        'visual': 'video',
        'auditory': 'audio',
        'kinesthetic': 'interactive',
    }
    return format_map.get(style, 'text')
