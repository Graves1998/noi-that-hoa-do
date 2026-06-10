// Hoa Đô — HU Hexagon SVG mark (reusable component)
export default function LogoMark({ className = '', style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 116"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="hd-hex-clip">
          <polygon points="50,10 91,34 91,82 50,106 9,82 9,34" />
        </clipPath>
      </defs>
      <polygon
        points="50,10 91,34 91,82 50,106 9,82 9,34"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <g clipPath="url(#hd-hex-clip)">
        {/* H — left bar */}
        <rect x="12" y="0" width="11" height="116" />
        {/* H — right bar */}
        <rect x="36" y="0" width="11" height="116" />
        {/* H — crossbar */}
        <rect x="12" y="51" width="35" height="11" />
        {/* Divider */}
        <rect x="48" y="0" width="4" height="116" />
        {/* U — left bar */}
        <rect x="53" y="0" width="11" height="116" />
        {/* U — right bar */}
        <rect x="76" y="0" width="11" height="116" />
        {/* U — bottom connector */}
        <rect x="53" y="79" width="34" height="11" />
      </g>
    </svg>
  )
}
