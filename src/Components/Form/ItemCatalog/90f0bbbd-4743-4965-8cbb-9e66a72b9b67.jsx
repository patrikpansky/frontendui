const codes = [
    {"name": "Česká průmyslová zdravotní pojišťovna", "value": "CZ 205"},
    {"name": "Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví", "value": "CZ 207"},
    {"name": "RBP, zdravotní pojišťovna", "value": "CZ 213"},
    {"name": "Všeobecná zdravotní pojišťovna České republiky", "value": "CZ 111"},
    {"name": "Vojenská zdravotní pojišťovna ČR", "value": "CZ 201"},
    {"name": "Zaměstnanecká pojišťovna Škoda", "value": "CZ 209"},
    {"name": "Zdravotní pojišťovna ministerstva vnitra", "value": "CZ 211"},
    {"name": "DÔVERA zdravotná poisťovňa, a. s.", "value": "SK 24"},
    {"name": "VŠEOBECNÁ zdravotná poisťovňa, a. s.", "value": "SK 25"},
    {"name": "UNION zdravotná poisťovňa, a. s.", "value": "SK 27"},   

    {"name": "Wiener Gebietskrankenkasse", "value": "AU 001"},       
    {"name": "Oberösterreichische Gebietskrankenkasse", "value": "AU 002"},           
]
export const Pojistovny = ({item, ...rest}) => {
    return (
        <select {...rest} value={item?.value}>
            {codes.map(
                code => <option key={code.value} value={code.value}>{code.name}</option>
            )}            
        </select>
    )
}

