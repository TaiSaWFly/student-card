export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidale;
        switch (validateMethod) {
            case "isRequired":
                statusValidale = data.trim() === "";
                break;

            case "isNumberOfDigits":
                const regExpDigit = /^\d{4}$/g;
                statusValidale = !regExpDigit.test(data);
                break;

            case "maxYear":
                statusValidale = Number(data) >= config.value;
                break;

            case "isUrl":
                const regExpUrl = /^https:\/{2}[a-zA-Z0-9]+\.\S+$/g;
                statusValidale = !regExpUrl.test(data);
                break;

            default:
                break;
        }
        if (statusValidale) return config.message;
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
