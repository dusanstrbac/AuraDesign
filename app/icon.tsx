import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d4af37',
          fontWeight: 'bold',
          fontFamily: 'serif',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.1)',
          lineHeight: 1,
          textAlign: 'center',
        }}
      >
        AD
      </div>
    ),
    {
      ...size,
    }
  );
}