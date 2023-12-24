<template>
  <template v-for="(item, index) in nav_items">
    <template v-if="item.children !== undefined">
      <NavItem
        v-if="item.title !== undefined"
        :title="item.title"
        :text_color="item.color"
        :icon="item.icon.icon"
        :icon_color="item.icon.color"
        :key="index"
      >
        <template v-for="(child, child_index) in item.children">
          <template v-if="child.icon !== undefined">
            <NavDropdownItem
              v-if="child.title !== undefined"
              :title="child.title"
              :text_color="child.color"
              :href="child.to"
              :icon="child.icon.icon"
              :icon_color="child.icon.color"
              :key="child_index"
            >
              <template v-if="child.badge !== undefined" #badge>
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">{{ child.badge.text }}</span>
              </template>
            </NavDropdownItem>
          </template>
          <template v-else>
            <NavDropdownItem
              v-if="child.title !== undefined"
              :title="child.title"
              :text_color="child.color"
              :href="child.to"
              :key="child_index"
            >
              <template v-if="child.badge !== undefined" #badge>
                <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">{{ child.badge.text }}</span>
              </template>
            </NavDropdownItem>
          </template>
        </template>
      </NavItem>
    </template>
    <template v-else-if="item.columns !== undefined">
      <NavItem
        v-if="item.title !== undefined"
        :title="item.title"
        :text_color="item.color"
        :icon="item.icon.icon"
        :icon_color="item.icon.color"
        :key="index"
      >
        <DropdownColumns>
          <DropdownColumn v-for="(column, column_index) in item.columns" :key="column_index">
            <template v-for="(child, child_index) in column.children">
              <template v-if="child.icon !== undefined">
                <NavDropdownItem
                  v-if="child.title !== undefined"
                  :title="child.title"
                  :text_color="child.color"
                  :href="child.to"
                  :icon="child.icon.icon"
                  :icon_color="child.icon.color"
                  :key="child_index"
                >
                  <template v-if="child.badge !== undefined" #badge>
                    <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">{{ child.badge.text }}</span>
                  </template>
                </NavDropdownItem>
              </template>
              <template v-else>
                <NavDropdownItem
                  v-if="child.title !== undefined"
                  :title="child.title"
                  :text_color="child.color"
                  :href="child.to"
                  :key="child_index"
                >
                  <template v-if="child.badge !== undefined" #badge>
                    <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">{{ child.badge.text }}</span>
                  </template>
                </NavDropdownItem>
              </template>
            </template>
          </DropdownColumn>
        </DropdownColumns>
      </NavItem>
    </template>
    <template v-else>
      <router-link
        v-if="item.to !== undefined"
        :to="item.to"
        custom
        v-slot="{ isExactActive }"
        :key="index"
      >
        <template v-if="item.icon !== undefined">
          <NavItem 
            v-if="item.title !== undefined"
            :title="item.title"
            :text_color="item.color"
            :icon="item.icon.icon"
            :icon_color="item.icon.color"
            :href="item.to"
            :active="isExactActive"
          />
        </template>
        <template v-else>
          <NavItem 
            v-if="item.title !== undefined"
            :title="item.title"
            :text_color="item.color"
            :href="item.to"
            :active="isExactActive"
          />
        </template>
      </router-link>
    </template>
  </template>
</template>

<script>
import NavItem from '@/components/navigation/item/NavItem.vue'
import NavDropdownItem from '@/components/navigation/item/NavDropdownItem.vue'
import DropdownColumns from '@/components/navigation/column/DropdownColumns.vue'
import DropdownColumn from '@/components/navigation/column/DropdownColumn.vue'
import { getNavItems } from '@/services/navigation/NavigationUtils.js'

export default {
  name: 'NavItemGenerator',
  components: {
    NavItem,
    NavDropdownItem,
    DropdownColumns,
    DropdownColumn,
  },
  props: {
  },
  data: () => ({
    nav_items: getNavItems()
  }),
  computed: {
  },
  methods: {
  }
}
</script>