import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import LebronStretch from "../photos/lebron_transparent.png";
import { Font , View } from '@react-pdf/renderer';
// import MyCustomFont from '../fonts/Anton-Regular.ttf';

// Font.register({
//   family: 'AntonFamily',
//   src: MyCustomFont
// })

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        // fontFamily: "AntonFamily",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        // fontFamily: "AntonFamily",

    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        // fontFamily: "AntonFamily",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        // fontFamily: "AntonFamily",
    },
});

const TicketPdf = () => {

    const pageColors = ['#f6d186', '#f67280', '#c06c84'];

    const pages = [
        // {text: 'First page content goes here...', image: LebronStretch },
        { text: 'Second page content goes here...', image: 'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcwMzExMzEwNTc0MTAxODM5/lebron-dunk.jpg' },
        { text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
    ]

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    );
};

export default TicketPdf;