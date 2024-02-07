import { assign, setup } from 'xstate'
import { GenericItem } from '../../../@types/global'
import { Feed } from '../types/feedTypes'

export const feedMachine = setup({
  types: {} as {
    context: { feeds: GenericItem<Feed>[]; page: number }
    events:
      | { type: 'LOADING_FEEDS' }
      | { type: 'LOADED_FEEDS' }
      | { type: 'FEEDS_NEXT_PAGE_COMPLETE' }
      | { type: 'FEEDS_LOADED'; value: GenericItem<Feed>[] }
      | { type: 'FETCH_FEEDS_NEXT_PAGE'; page: number }
  },
  actions: {
    /* LOADING_FEEDS: () => {
      // TODO: implement
    }, */
  },
}).createMachine({
  id: 'feed',
  initial: 'loading',
  context: {
    feeds: [],
    page: 1,
  },
  states: {
    loading: {
      on: {
        LOADED_FEEDS: {
          target: 'loaded',
        },
      },
    },
    fetching: {
      on: {
        FEEDS_NEXT_PAGE_COMPLETE: {
          target: 'loaded',
        },
      },
    },
    loaded: {
      on: {
        FEEDS_LOADED: {
          target: 'loaded',
          actions: assign({
            feeds: ({ event, context }) => {
              return [...context.feeds, ...event.value]
            },
          }),
        },
        FETCH_FEEDS_NEXT_PAGE: {
          target: 'fetching',
          actions: assign({
            page: ({ event }) => {
              return event.page
            },
          }),
        },
      },
    },
    error: {},
  },
})
