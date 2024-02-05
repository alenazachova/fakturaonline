import elementLocale from "element-ui/lib/locale/lang/cs-CZ";

const messages = {
  cs: {
    blog: {
      more: "Další články z blogu →",
    },
    form: {
      invoiceForm: {
        fields: {
          invoiceKind: {
            label: "Druh faktury",
            inputHelp:
              "Věnujte pozornost výběru druhu faktury. Pokud nejste plátci DPH, měli byste zvolit fakturu bez DPH!",
          },
          number: {
            label:
              "Číslo faktury, Variabilní symbol Zadat jiný, Evidenční číslo Zadat jiný",
          },
          ks: {
            label: "Konstantní symbol (volitelný)",
          },
          vs: {
            label: "Specifický symbol (volitelný)",
          },
          issedOn: {
            label: "Datum vystavení, Datum zdanitelného plnění Zadat jiné",
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
