module.exports = {
    createSqlDate() {
        const date = new Date().toLocaleDateString();
        const dateArray = date.split("/");
        return dateArray[2] + "/" + dateArray[0] + "/" + dateArray[1];
    },
    
    modifyDateForSql(date) {
        const dateArray = date.split("-");
        return dateArray[2] + "/" + dateArray[0] + "/" + dateArray[1];
    }
}