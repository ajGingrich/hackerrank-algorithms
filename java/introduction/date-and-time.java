class Result {
    public static String findDay(int month, int day, int year) {
        Date d = new Date(year - 1900, month - 1, day);
        SimpleDateFormat objSDF = new SimpleDateFormat("EEEE");

        return objSDF.format(d).toUpperCase();
    }
}
