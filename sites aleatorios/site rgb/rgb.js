const redSlider = document.getElementById('red');
        const greenSlider = document.getElementById('green');
        const blueSlider = document.getElementById('blue');

        const redValue = document.getElementById('red-value');
        const greenValue = document.getElementById('green-value');
        const blueValue = document.getElementById('blue-value');

        const rgbDisplay = document.getElementById('rgb-display');
        const tooltip = document.getElementById('tooltip');

        function updateBackgroundColor() {
            const r = redSlider.value;
            const g = greenSlider.value;
            const b = blueSlider.value;

            // Update background color
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            // Update displayed values
            redValue.textContent = r;
            greenValue.textContent = g;
            blueValue.textContent = b;

            // Update RGB text
            rgbDisplay.textContent = `RGB(${r}, ${g}, ${b})`;
        }

        function copyToClipboard() {
            const rgbText = rgbDisplay.textContent;

            // Create a temporary textarea to copy the text
            const tempInput = document.createElement('textarea');
            tempInput.value = rgbText;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Show the tooltip
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';

            setTimeout(() => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            }, 1500);
        }

        // Position the tooltip above the RGB display
        function positionTooltip() {
            const rect = rgbDisplay.getBoundingClientRect();
            tooltip.style.top = `${rect.top - 30}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        }

        // Add event listeners
        redSlider.addEventListener('input', updateBackgroundColor);
        greenSlider.addEventListener('input', updateBackgroundColor);
        blueSlider.addEventListener('input', updateBackgroundColor);
        rgbDisplay.addEventListener('click', copyToClipboard);
        window.addEventListener('resize', positionTooltip);
        window.addEventListener('load', positionTooltip);

        // Initialize the background color
        updateBackgroundColor();