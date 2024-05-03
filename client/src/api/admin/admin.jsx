const rawMessageData = {
    "data": [{
        "id": 1,
        "name": "John Doe",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "isActive": true,
        "messages": [
            {
                "content": "Hello, how are you?",
                "timestamp": "2024-04-19T12:00:00Z",
                "isSent": true
            },
            {
                "content": "I'm fine, thank you!",
                "timestamp": "2024-04-19T12:01:00Z",
                "isSent": false
            },
            {
                "content": "How about you?",
                "timestamp": "2024-04-19T12:02:00Z",
                "isSent": true
            },
            {
                "content": "I'm doing great!",
                "timestamp": "2024-04-19T12:03:00Z",
                "isSent": false
            },
            {
                "content": "That's good to hear!",
                "timestamp": "2024-04-19T12:04:00Z",
                "isSent": true
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "photo": "https://randomuser.me/api/portraits/women/2.jpg",
        "isActive": false,
        "messages": [
            {
                "content": "Hi, nice to meet you!",
                "timestamp": "2024-04-19T13:00:00Z",
                "isSent": true
            },
            {
                "content": "Nice to meet you too!",
                "timestamp": "2024-04-19T13:01:00Z",
                "isSent": false
            },
            {
                "content": "How's your day going?",
                "timestamp": "2024-04-19T13:02:00Z",
                "isSent": true
            }
        ]
    },
    {
        "id": 3,
        "name": "Robert Johnson",
        "photo": "https://randomuser.me/api/portraits/men/3.jpg",
        "isActive": false,
        "messages": [
            {
                "content": "Good morning!",
                "timestamp": "2024-04-19T08:00:00Z",
                "isSent": true
            },
            {
                "content": "Good morning, Robert!",
                "timestamp": "2024-04-19T08:01:00Z",
                "isSent": false
            },
            {
                "content": "How are you today?",
                "timestamp": "2024-04-19T08:02:00Z",
                "isSent": true
            }
        ]
    }, {
        "id": 4,
        "name": "Emily Davis",
        "photo": "https://randomuser.me/api/portraits/women/4.jpg",
        "isActive": false,
        "messages": [
            {
                "content": "Hello, are you available for a meeting?",
                "timestamp": "2024-04-19T09:00:00Z",
                "isSent": true
            },
            {
                "content": "Yes, I am. What time?",
                "timestamp": "2024-04-19T09:01:00Z",
                "isSent": false
            },
            {
                "content": "How about 10 AM?",
                "timestamp": "2024-04-19T09:02:00Z",
                "isSent": true
            },
            {
                "content": "That works for me.",
                "timestamp": "2024-04-19T09:03:00Z",
                "isSent": false
            },
            {
                "content": "Great, see you then.",
                "timestamp": "2024-04-19T09:04:00Z",
                "isSent": true
            },
            {
                "content": "See you!",
                "timestamp": "2024-04-19T09:05:00Z",
                "isSent": false
            }
        ]
    }, {
        "id": 5,
        "name": "Michael Wilson",
        "photo": "https://randomuser.me/api/portraits/men/5.jpg",
        "isActive": true,
        "messages": []
    }, {
        "id": 6,
        "name": "Jack Johnson",
        "photo": "https://randomuser.me/api/portraits/men/6.jpg",
        "isActive": true,
        "messages": [{
            "content": "Can you give me a call?",
            "timestamp": "2024-04-19T09:00:00Z",
            "isSent": true
        }, {
            "content": "Sure, what's up?",
            "timestamp": "2024-04-19T09:01:00Z",
            "isSent": false
        }, {
            "content": "I need to discuss something with you.",
            "timestamp": "2024-04-19T09:02:00Z",
            "isSent": true
        }, {
            "content": "I'll call you later.",
            "timestamp": "2024-04-19T09:03:00Z",
            "isSent": false
        }]
    }, {
        "id": 7,
        "name": "Lily Brown",
        "photo": "https://randomuser.me/api/portraits/women/7.jpg",
        "isActive": true,
        "messages": [{
            "content": "Please send me the report.",
            "timestamp": "2024-04-19T09:00:00Z",
            "isSent": true
        }, {
            "content": "I need it for the meeting.",
            "timestamp": "2024-04-19T09:00:05Z",
            "isSent": true
        }, {
            "content": "It's is very important.",
            "timestamp": "2024-04-19T09:00:05Z",
            "isSent": true
        }, {
            "content": "I'll send it to you right away.",
            "timestamp": "2024-04-19T09:01:00Z",
            "isSent": false
        }]
    }
    ]
}

export function getMessages() {
    // fetch data with user token, blah blah
    return rawMessageData.data;
}
