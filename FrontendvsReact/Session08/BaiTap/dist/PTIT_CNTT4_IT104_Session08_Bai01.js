var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Thu Hai";
    WeekDays["Tuesday"] = "Thu Ba";
    WeekDays["Wednesday"] = "Thu Tu";
    WeekDays["Thursday"] = "Thu Nam";
    WeekDays["Friday"] = "Thu Sau";
    WeekDays["Saturday"] = "Thu Bay";
    WeekDays["Sunday"] = "Chu Nhat";
})(WeekDays || (WeekDays = {}));
Object.values(WeekDays).forEach(day => {
    console.log(day);
});
