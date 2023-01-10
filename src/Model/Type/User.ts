export interface User {
    gender: "male" | "female",
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
        street: {
            number: number,
            name: string
        },
        city: string
    },
    email: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    id: {
        name: string,
        value: string
    }
}

export interface GetUserResponse {
    results: User[]
}

const a = {
    "gender": "female",
    "name": {
        "title": "Miss",
        "first": "Line",
        "last": "Bourgeois"
    },
    "location": {
        "street": {
            "number": 9959,
            "name": "Avenue Joliot Curie"
        },
        "city": "Boulogne-Billancourt",
        "state": "Pas-de-Calais",
        "country": "France",
        "postcode": 65395,
        "coordinates": {
            "latitude": "-13.3138",
            "longitude": "96.7753"
        },
        "timezone": {
            "offset": "-11:00",
            "description": "Midway Island, Samoa"
        }
    },
    "email": "line.bourgeois@example.com",
    "login": {
        "uuid": "8101f12c-9332-430d-a19b-38450d05c555",
        "username": "sadelephant569",
        "password": "mazda",
        "salt": "mphlc1Nf",
        "md5": "fe363d6cd08009447fff16c5bf0b4a45",
        "sha1": "f251706a9a5583f212992f5006ee45adf7974077",
        "sha256": "20a9c2d440445518485ed325718738984e6999b6d1d213e36f09346e7cd2569c"
    },
    "dob": {
        "date": "1961-03-29T14:32:20.227Z",
        "age": 61
    },
    "registered": {
        "date": "2009-03-26T05:19:52.135Z",
        "age": 13
    },
    "phone": "05-03-73-33-17",
    "cell": "06-25-74-00-00",
    "id": {
        "name": "INSEE",
        "value": "2610253469037 29"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
    },
    "nat": "FR"
}