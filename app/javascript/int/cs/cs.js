import elementLocale from "element-ui/lib/locale/lang/cs-CZ";

const messages = {
  cs: {
    blog: {
      more: "Další články z blogu →",
    },
    form: {
      optional: "volitelný",
      invoiceForm: {
        fields: {
          invoiceKind: {
            label: "Druh faktury",
            inputHelp:
              "Věnujte pozornost výběru druhu faktury. Pokud nejste plátci DPH, měli byste zvolit fakturu bez DPH!",
          },
          number: {
            label: "Číslo faktury, Variabilní symbol, Evidenční číslo",
          },
          ks: {
            label: "Konstantní symbol",
          },
          ss: {
            label: "Specifický symbol",
          },
          issedOn: {
            label: "Datum vystavení, Datum zdanitelného plnění",
          },
          maturity: {
            label: "Splatnost",
          },
        },
      },
    },
    ...elementLocale,
  },
};

export default messages;
