const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Ivanov",
            "id_2": "Smirnov",
            "id_3": "Kuznetsov",
            "id_4": "Vasiliev",
            "id_5": "Petrov",
            "id_6": "Mikhailov",
            "id_7": "Novikov",
            "id_8": "Fedorov",
            "id_9": "Kravtsov",
            "id_10": "Nikolaev",
            "id_11": "Semenov",
            "id_12": "Slavin",
            "id_13": "Stepanov",
            "id_14": "Pavlov",
            "id_15": "Alexandrov",
            "id_16": "Morozov"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Alexander",
            "id_2": "Maxim",
                        "id_3": "Ivan",
                        "id_4": "Artem",
            "id_5": "Dmitry",
                        "id_6": "Nikita",
            "id_7": "Mikhail",
                        "id_8": "Daniel",
                        "id_9": "Egor",
            "id_10": "Andrey"
        }
    }`,
    firstNameFemJson: `{
        "count": 10,
        "list": {
            "id_1": "Alexandra",
            "id_2": "Maximiliana",
            "id_3": "Ivanessa",
            "id_4": "Artemis",
            "id_5": "Dmitriana",
            "id_6": "Nika",
            "id_7": "Milan",
            "id_8": "Daria",
            "id_9": "Elena",
            "id_10": "Antonella"
        }
    }`,

    monthDateBirth: `{
        "count": 12,
        "list": {     
            "id_1": "January",
            "id_2": "February",
            "id_3": "March",
            "id_4": "April",
            "id_5": "May",
            "id_6": "June",
            "id_7": "July",
            "id_8": "August",
            "id_9": "September",
            "id_10": "October",
            "id_11": "November",
            "id_12": "December"
        }
    }`,

    GENDER_MALE: 'Male',
    GENDER_FEMALE: 'Female',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        if (randomGenderNumber === 1) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemJson);
        }
    },

    randomGender: function () {
        let max = 1;
        let min = 0;
        randomGenderNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomGenderNumber === 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },

    randomSurname: function () {
        if (randomGenderNumber === 1) {
            return this.randomValue(this.surnameJson);
        } else {
            let femSurname = this.randomValue(this.surnameJson);
            return femSurname + "a";
        }
    },

    randomDate: function () {

        let dateBirth = this.randomValue(this.monthDateBirth);
        if (["January", "March", "May", "July", "August", "October", "December"].includes(dateBirth)) 
        return `${this.randomIntNumber(31,1)} ${dateBirth}`
    else if ((dateBirth === "february") && (this.isLeapYear(this.person.birthYear)))
        return `${this.randomIntNumber(29,1)} ${dateBirth}`
    else if (dateBirth === "february")
        return `${this.randomIntNumber(28,1)} ${dateBirth}`
    else
        return `${this.randomIntNumber(30,1)} ${dateBirth}`
    },

    randomBirth: function () {
        let minYear = Math.ceil(1940);
        let maxYear = Math.floor(2000);
        let randomYear = Math.floor(Math.random() * (maxYear - minYear) + minYear);
        return randomYear + " year of birth";

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.Date = this.randomDate();
        this.person.birth = this.randomBirth();
        return this.person;
    }
};