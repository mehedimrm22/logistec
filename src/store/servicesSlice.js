import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 'logistics',
      title: 'Logistics Management',
      summary: 'Complete logistics planning and delivery optimization.',
      description:
        'This module covers transport planning, scheduling, route optimization and more.',
    },
    {
      id: 'packaging',
      title: 'Packaging & Safety',
      summary: 'Durable packaging for safe delivery.',
      description:
        'We specialize in secure product packaging and safety handling protocols.',
    },
    {
      id: 'tracking',
      title: 'Real-Time Tracking',
      summary: 'Live shipment tracking & notifications.',
      description:
        'Track your shipments with real-time GPS and automated updates.',
    },
  ],
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
})

export default servicesSlice.reducer
