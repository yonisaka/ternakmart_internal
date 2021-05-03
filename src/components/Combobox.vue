<template>
    <v-combobox
        :filter="filter"
        :items="options"
        v-bind:value="value"
        :search-input.sync="search"
        hide-selected
        outlined
        dense
        :label="label"
        @input="updateText($event)"
        :return-object="true"
        >
        <template v-slot:selection="{ attrs, item, selected }">
            <span
            v-if="item === Object(item)"
            v-bind="attrs"
            :color="`${item.color} lighten-3`"
            :input-value="selected"
            label
            small
            >
            <span class="pr-2">
                {{ item.text }}
            </span>
            
            </span>
            <span
            :v-if="value"
            v-bind="attrs"
            :color="`${item.color} lighten-3`"
            :input-value="value"
            label
            small
            >
            <span class="pr-2">
                {{ value }}
            </span>
            
            </span>
        </template>
        <template v-slot:item="{ index, item }">
            <v-text-field
            v-if="editing === item"
            v-model="editing.text"
            autofocus
            flat
            background-color="transparent"
            hide-details
            solo
            @keyup.enter="edit(index, item)"
            ></v-text-field>
            <v-chip
            v-else
            :color="`${item.color} lighten-3`"
            dark
            label
            small
            >
            {{ item.text }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-list-item-action @click.stop>
            <v-btn
                v-if="item.editable"
                icon
                @click.stop.prevent="edit(index, item)"
            >
                <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
            </v-btn>
            </v-list-item-action>
        </template>
    </v-combobox>
</template>
<script>
    export default {
        props: 
            ["value","label"],
        data: () => ({
            options: [
                // { header: 'Select an option or create one' },
                {
                    text: 'Normal dan sehat.',
                    color: 'blue',
                    editable: false
                },
                {
                    text: 'Tidak normal dan sehat.',
                    color: 'orange',
                    editable: false
                },
                {
                    text: 'Tidak normal dan tidak sehat.',
                    color: 'red',
                    editable: true
                },
            ],
            activator: null,
            attach: null,
            colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
            editing: null,
            editingIndex: -1,
            nonce: 1,
            menu: false,
            model: [
                {
                text: 'Foo',
                color: 'blue',
                },
            ],
            x: 0,
            search: null,
            searchTerapi: null,
            y: 0,
        }),
        watch: {
            model (val, prev) {
                if (val.length === prev.length) return

                this.model = val.map(v => {
                if (typeof v === 'string') {
                    v = {
                    text: v,
                    color: this.colors[this.nonce - 1],
                    }

                    this.items.push(v)

                    this.nonce++
                }

                return v
                })
            },
        },
        methods: {
            edit (index, item) {
                if (!this.editing) {
                    this.editing = item
                    this.editingIndex = index
                } else {
                    this.editing = null
                    this.editingIndex = -1
                }
            },
            filter (item, queryText, itemText) {
                if (item.header) return false

                const hasValue = val => val != null ? val : ''

                const text = hasValue(itemText)
                const query = hasValue(queryText)

                return text.toString()
                .toLowerCase()
                .indexOf(query.toString().toLowerCase()) > -1
            },
            updateText (value) {
                this.$emit('input', value.text)
            }
        }
    }
</script>