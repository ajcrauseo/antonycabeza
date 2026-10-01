import { ImageResponse } from 'next/og'

import { siteConfig } from './constants/site'

export const alt = `${siteConfig.name} | ${siteConfig.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#050816',
          backgroundImage:
            'linear-gradient(135deg, #050816 0%, #151030 55%, #2b32d6 160%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '999px',
              backgroundColor: '#2b32d6',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              color: '#aaa6c3',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Portfolio
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '36px',
            fontSize: '82px',
            fontWeight: 700,
            color: '#f3f3f3',
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '24px',
            fontSize: '40px',
            color: '#2b32d6',
          }}
        >
          {siteConfig.title}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '16px',
            fontSize: '30px',
            color: '#aaa6c3',
          }}
        >
          {siteConfig.role}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '48px',
            width: '160px',
            height: '6px',
            borderRadius: '999px',
            backgroundImage: 'linear-gradient(90deg, #2b32d6, #aaa6c3)',
          }}
        />
      </div>
    ),
    size
  )
}