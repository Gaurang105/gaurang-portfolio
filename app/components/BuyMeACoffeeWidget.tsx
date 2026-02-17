"use client";

import Script from "next/script";

export function BuyMeACoffeeWidget() {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="gauranggujrati"
      data-description="Support me on Buy me a coffee!"
      data-message="Like what you're reading? You can donate to support my writing!"
      data-color="#FF813F"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      strategy="afterInteractive"
      onLoad={() => {
        window.dispatchEvent(new Event("DOMContentLoaded"));
      }}
    />
  );
}
