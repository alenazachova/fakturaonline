<template>
  <div>
    <Form
      :model="resource"
      ref="form"
    >
      <div class="form-left">
        <FormGroup
          prop="invoiceKind"
          :label="$t('form.invoiceForm.fields.invoiceKind.label')"
          :help="$t('form.invoiceForm.fields.invoiceKind.inputHelp')"
          :floatingLabel=true
          :hasInputValue=!!resource.invoiceKind
        >
          <template v-slot="{ slotHandleFocus, slotHandleBlur }">
          <Select
            v-model="resource.invoiceKind"
            name="invoiceKind"
          >
            <Option
              v-for="option in invoiceKinds"
              :key="option.value"
              :label="option.name"
              :value="option.value"
            />
          </Select>
          </template>
        </FormGroup>

        <FormGroup
          prop="number"
          :label="$t('form.invoiceForm.fields.number.label')"
          :floatingLabel=true
          :hasInputValue=!!resource.number
        >
          <template v-slot="{ slotHandleFocus, slotHandleBlur }">
            <TextInput
              name="number"
              type="string"
              v-model="resource.number"
              @focus="slotHandleFocus"
              @blur="slotHandleBlur"
            />
          </template>
        </FormGroup>

      <div class="form-line">
        <FormGroup
          prop="ks"
          :label="$t('form.invoiceForm.fields.ks.label')"
          :floatingLabel=true
          :optional=true
          :hasInputValue=!!resource.ks
        >
          <template v-slot="{ slotHandleFocus, slotHandleBlur }">
          <TextInput
            name="ks"
            type="string"
            v-model="resource.ks"
            @focus="slotHandleFocus"
            @blur="slotHandleBlur"
          />
          </template>
        </FormGroup>

        <FormGroup
          prop="ss"
          :label="$t('form.invoiceForm.fields.ss.label', )"
          :floatingLabel=true
          :optional=true
          :hasInputValue=!!resource.ss
        >
          <template v-slot="{ slotHandleFocus, slotHandleBlur }">
          <TextInput
            name="ss"
            type="string"
            v-model="resource.ss"
            @focus="slotHandleFocus"
            @blur="slotHandleBlur"
          />
          </template>
        </FormGroup>

      </div>
    </div>

      <div class="form-right">
        <FormGroup
          input-narrow
          prop="issedOn"
          :label="$t('form.invoiceForm.fields.issedOn.label')"
          :floatingLabel=true
          :hasInputValue=!!resource.issedOn
        >
        <template v-slot="{ slotHandleFocus, slotHandleBlur }">
          <DatePicker
            v-model="resource.issedOn"
            value-format="timestamp"
            format="dd. MM. yyyy"
            align="right"
            :clearable="false"
            @focus="slotHandleFocus"
            @blur="slotHandleBlur"
          />
        </template>
        </FormGroup>
        <div class="form-maturity">
          <FormGroup
            prop="maturity"
            :label="$t('form.invoiceForm.fields.maturity.label')"
            :floatingLabel=true
            :hasInputValue=!!resource.maturity
          >
            <template v-slot="{ slotHandleFocus, slotHandleBlur }">
            <Select
              v-model="resource.maturity"
              :placeholder="$t('form.invoiceForm.fields.maturity.label')"
              name="maturity"
            >
              <Option
                v-for="option in maturityKinds"
                :key="option.value"
                :label="option.name"
                :value="option.value"
              />

            </Select>
            </template>
          </FormGroup>
        </div>
      </div>

      </Form>
    </div>
</template>

<script>

export default {
  name: 'BasicForm',
  data: () => ({
    resource: {
      number: '',
      ks: '',
      ss: '',
      issedOn: '',
      invoiceKind: 'vat_invoice'
    },
    invoiceKinds: [
      { value: 'vat_invoice', name: 'Faktura s DPH' },
      { value: 'invoice', name: 'Faktura bez DPH' },
      { value: 'proforma', name: 'Proforma' },
    ],
    maturityKinds: [
      { value: '7', name: '7 dnů' },
      { value: '14', name: '14 dnů' },
      { value: '21', name: '21 dnů' },
    ]
  })
}
</script>

<style scoped>
</style>
