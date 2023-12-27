<template>
  <PageContainer>
    <NavBar />
    <PageWrapper>
      <PageTitle title="Alerts" />
      <PageBody>
        <GridRow :row_cards="true">
          <GridColumn :col_lg_x="6">
            <SimpleCard>
              <CardTitle title="Basic alerts" />
              <p class="text-secondary">
                Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual classes (e.g., <code>.alert-success</code>) for basic alert messages.
              </p>
              <BasicAlert text="Wow! Everything worked!" color="success" />
              <BasicAlert text="Uh oh, something went wrong" color="warning" />
              <BasicAlert text="I'm so sorry..." color="danger" />
              <BasicAlert text="Did you know?" color="info" />
            </SimpleCard>
          </GridColumn>
          <GridColumn :col_lg_x="6">
            <SimpleCard>
              <CardTitle title="Alerts with icon" />
              <p class="text-secondary">
                Build on any alert by adding an optional icon.
              </p>
              <BasicAlert text="Wow! Everything worked!" color="success" icon="check" />
              <BasicAlert text="Uh oh, something went wrong" color="warning" icon="alert-triangle" />
              <BasicAlert text="I'm so sorry..." color="danger" icon="alert-circle" />
              <BasicAlert text="Did you know?" color="info" icon="info-circle" />
            </SimpleCard>
          </GridColumn>
          <GridColumn :col_lg_x="6">
            <SimpleCard>
              <CardTitle title="Dismissible alerts" />
              <p class="text-secondary">
                Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.
              </p>
              <DismissibleAlert text="Wow! Everything worked!" color="success" icon="check" />
              <DismissibleAlert text="Uh oh, something went wrong" color="warning" icon="alert-triangle" />
              <DismissibleAlert text="I'm so sorry..." color="danger" icon="alert-circle" />
              <DismissibleAlert text="Did you know?" color="info" icon="info-circle" />
            </SimpleCard>
          </GridColumn>
          <GridColumn :col_lg_x="6">
            <SimpleCard>
              <CardTitle title="Alert with a description" />
              <p class="text-secondary">
                Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.
              </p>
              <BasicAlert
                text="This is a custom alert box!"
                description="Your account has been saved!"
                color="success"
                icon="check"
              />
              <BasicAlert
                text="This is a custom alert box!"
                description="Sorry, there was a problem with your request."
                color="warning"
                icon="alert-triangle"
              />
              <BasicAlert
                text="This is a custom alert box!"
                description="Something went wrong. Please try again."
                color="danger"
                icon="alert-circle"
              />
              <BasicAlert
                text="This is a custom alert box!"
                description="Here is something that you might like to know."
                color="info"
                icon="info-circle"
              />
            </SimpleCard>
          </GridColumn>
          <GridColumn :col_lg_x="6">
            <SimpleCard>
              <CardTitle title="Important alerts" />
              <DismissibleAlert text="Wow! Everything worked!" color="success" icon="check" important />
              <DismissibleAlert text="Uh oh, something went wrong" color="warning" icon="alert-triangle" important />
              <DismissibleAlert text="I'm so sorry..." color="danger" icon="alert-circle" important />
              <DismissibleAlert text="Did you know?" color="info" icon="info-circle" important />
            </SimpleCard>
          </GridColumn>
        </GridRow>
      </PageBody>
    </PageWrapper>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/page/PageContainer.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import PageWrapper from '@/components/page/PageWrapper.vue'
import PageTitle from '@/components/page/PageTitle.vue'
import PageBody from '@/components/page/PageBody.vue'
import GridRow from '@/components/grid/GridRow.vue'
import GridColumn from '@/components/grid/GridColumn.vue'
import SimpleCard from '@/components/card/SimpleCard'
import CardTitle from '@/components/card/CardTitle'
import BasicAlert from '@/components/alert/BasicAlert'
import DismissibleAlert from '@/components/alert/DismissibleAlert'

export default {
  name: 'AlertsPage',
  components: {
    PageContainer,
    NavBar,
    PageWrapper,
    PageTitle,
    PageBody,
    GridRow,
    GridColumn,
    SimpleCard,
    CardTitle,
    BasicAlert,
    DismissibleAlert,
  },
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>