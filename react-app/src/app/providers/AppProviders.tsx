import React from 'react'
import { ConfigProvider, theme } from 'antd'
import type { ConfigProviderProps } from 'antd'

interface AppProvidersProps {
  children: React.ReactNode
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  const config: ConfigProviderProps = {
    theme: {
      algorithm: theme.defaultAlgorithm,
      token: {
        colorPrimary: '#1677ff',
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#ff4d4f',
        colorInfo: '#1677ff',
        borderRadius: 6,
        fontSize: 14,
      },
    },
    componentSize: 'middle',
  }

  return <ConfigProvider {...config}>{children}</ConfigProvider>
}
