export interface BillItems {
    bill: string;
    shortTitle: string;
    dateFiled: string;
    author: string;
}

export interface floorActivityItems {
    statusDate: string;
    parliamentaryStatus: string;
    senators: string;
    remarks: string;
}

export class DataSource{
    billSearchResult : BillItems[] = billSearchResult;
    floorActivity : floorActivityItems[] = floorActivity;
}

const billSearchResult: BillItems[] = [
    {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "11/19/2018", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2101', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2102', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2103', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2104', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2105', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2106', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2107', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2108', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2109', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2110', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2111', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2112', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2113', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2114', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2115', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2116', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2117', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2118', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2119', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2120', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2121', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2122', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2123', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2124', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'},
    {bill: 'SBN-2125', shortTitle: 'AUTOMATIC REVERSAL OF THE EXCISE(2) TAX ON FUEL UNDER R.A NO.10963 (TRAIN LAW)', dateFiled: "2018-11-19", author: 'VILLANUEVA, JOEL'}
];

const floorActivity: floorActivityItems[] = [
    {statusDate: "09/20/2017", parliamentaryStatus: 'Sponsorship Speech', senators: 'ANGARA, JUAN EDGARDO "SONNY" M.', remarks: 'Sample Remarks'},
    {statusDate: "09/27/2017", parliamentaryStatus: 'Interpellation', senators: 'VILLANUEVA, JOEL', remarks: 'Sample Remarks'},
    {statusDate: "10/04/2017", parliamentaryStatus: 'Sponsorship Speech', senators: 'SOTTO III, VICENTE C.', remarks: 'Sample Remarks'},
    {statusDate: "11/25/2017", parliamentaryStatus: 'Interpellation', senators: 'AQUINO IV, PAOLO BENIGNO "BAM"  RECTO, RALPH G.  GATCHALIAN, SHERWIN T.', remarks: 'Sample Remarks'},
    {statusDate: "01/09/2018", parliamentaryStatus: 'Sponsorship Speech', senators: 'DRILON, FRANKLIN M.  LACSON, PANFILO M.  HONTIVEROS, RISA  PANGILINAN, FRANCIS N.  RECTO, RALPH G.  GATCHALIAN, SHERWIN T.  PACQUIAO, EMMANUEL "MANNY" D.  PIMENTEL, AQUILINO KOKO III L.', remarks: 'Sample Remarks'}
];
