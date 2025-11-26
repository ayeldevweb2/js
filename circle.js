// // Create draggable circle element with image background
// const circle = document.createElement('div');
// circle.style.width = '100px';
// circle.style.height = '100px';
// circle.style.borderRadius = '50%';
// circle.style.position = 'absolute';
// circle.style.cursor = 'move';
// circle.style.top = '50%';
// circle.style.left = '50%';
// circle.style.transform = 'translate(-50%, -50%)';
// circle.style.display = 'flex';
// circle.style.justifyContent = 'center';
// circle.style.alignItems = 'center';
// circle.style.color = 'white';
// circle.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
// circle.style.userSelect = 'none';
// circle.style.zIndex = '9999';
// circle.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
// circle.style.transition = 'transform 0.2s ease';
// circle.style.backgroundImage = "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjkwZGplMGdpdjR3bWMxaXp6YjBobDFtdm82YWVmOWM3MjhoOWF4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HiDVR5R27cu6lULgiQ/giphy.gif')";
// circle.style.backgroundSize = 'cover';
// circle.style.backgroundPosition = 'center';
// document.body.appendChild(circle);

// // Create popup box element
// const box = document.createElement('div');
// box.style.width = '250px';
// box.style.minHeight = '150px';
// box.style.backgroundColor = '#fff';
// box.style.position = 'absolute';
// box.style.display = 'none';
// box.style.flexDirection = 'column';
// box.style.color = '#333';
// box.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
// box.style.borderRadius = '10px';
// box.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
// box.style.zIndex = '1000';
// box.style.overflow = 'hidden';
// box.style.transform = 'scale(0.9)';
// box.style.opacity = '0';
// box.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

// // Create box header
// const boxHeader = document.createElement('div');
// boxHeader.style.width = '100%';
// boxHeader.style.height = '40px';
// boxHeader.style.backgroundColor = '#3498db';
// boxHeader.style.display = 'flex';
// boxHeader.style.alignItems = 'center';
// boxHeader.style.paddingLeft = '15px';
// boxHeader.style.boxSizing = 'border-box';
// boxHeader.style.color = 'white';
// boxHeader.style.fontWeight = 'bold';

// // Create close button
// const closeBtn = document.createElement('button');
// closeBtn.textContent = '×';
// closeBtn.style.position = 'absolute';
// closeBtn.style.top = '8px';
// closeBtn.style.right = '10px';
// closeBtn.style.background = 'none';
// closeBtn.style.border = 'none';
// closeBtn.style.color = 'white';
// closeBtn.style.fontSize = '24px';
// closeBtn.style.cursor = 'pointer';
// closeBtn.style.width = '30px';
// closeBtn.style.height = '30px';
// closeBtn.style.display = 'flex';
// closeBtn.style.justifyContent = 'center';
// closeBtn.style.alignItems = 'center';
// closeBtn.style.fontWeight = 'bold';

// // Add content to box
// const boxContent = document.createElement('div');
// const title = document.createElement('h3');
// title.textContent = 'Hello There!';
// title.style.margin = '20px 15px 10px';
// title.style.color = '#3498db';

// const message = document.createElement('p');
// message.textContent = 'You clicked the circle! This popup appears right at its location.';
// message.style.margin = '10px 15px';
// message.style.lineHeight = '1.5';
// message.style.fontSize = '14px';

// boxContent.appendChild(title);
// boxContent.appendChild(message);

// box.appendChild(boxHeader);
// box.appendChild(closeBtn);
// box.appendChild(boxContent);
// document.body.appendChild(box);

// // Draggable circle functionality with improved boundary constraints
// let isDragging = false;
// let offsetX, offsetY;
// let clickStartX, clickStartY;
// let isClick = true;

// // Store the circle's center position
// let circleCenterX = window.innerWidth / 2;
// let circleCenterY = window.innerHeight / 2;

// circle.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     isClick = true;
//     const rect = circle.getBoundingClientRect();
//     offsetX = e.clientX - rect.left;
//     offsetY = e.clientY - rect.top;
//     clickStartX = e.clientX;
//     clickStartY = e.clientY;
//     circle.style.cursor = 'grabbing';
//     circle.style.transform = 'translate(-50%, -50%) scale(0.95)';
//     e.stopPropagation();
//     e.preventDefault();
// });

// document.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//         // Check if it's actually a drag (moved more than 2px)
//         const distance = Math.sqrt(
//             Math.pow(e.clientX - clickStartX, 2) + 
//             Math.pow(e.clientY - clickStartY, 2)
//         );
        
//         if (distance > 2) {
//             isClick = false;
//         }
        
//         // Calculate new center position with boundary constraints
//         const radius = 50; // half of circle width/height
//         const minX = radius;
//         const minY = radius;
//         const maxX = window.innerWidth - radius;
//         const maxY = window.innerHeight - radius;
        
//         // Calculate center position based on mouse position and offset
//         circleCenterX = e.clientX - offsetX + radius;
//         circleCenterY = e.clientY - offsetY + radius;
        
//         // Constrain to viewport boundaries
//         circleCenterX = Math.max(minX, Math.min(circleCenterX, maxX));
//         circleCenterY = Math.max(minY, Math.min(circleCenterY, maxY));
        
//         // Apply constrained position
//         circle.style.left = circleCenterX + 'px';
//         circle.style.top = circleCenterY + 'px';
//     }
// });

// document.addEventListener('mouseup', (e) => {
//     isDragging = false;
//     circle.style.cursor = 'move';
//     circle.style.transform = 'translate(-50%, -50%) scale(1)';
// });

// // Click detection (distinguishing from drag)
// circle.addEventListener('click', (e) => {
//     // Only trigger if it's a genuine click (not a drag)
//     if (isClick) {
//         // Position box at the circle's location
//         const circleRect = circle.getBoundingClientRect();
//         const x = circleRect.left;
//         const y = circleRect.top;
        
//         box.style.left = x + 'px';
//         box.style.top = (y + circleRect.height + 10) + 'px';
        
//         // Show box with animation
//         box.style.display = 'flex';
//         setTimeout(() => {
//             box.style.transform = 'scale(1)';
//             box.style.opacity = '1';
//         }, 10);
//     }
    
//     e.stopPropagation();
// });

// // Close box functionality with animation
// closeBtn.addEventListener('click', (e) => {
//     box.style.transform = 'scale(0.9)';
//     box.style.opacity = '0';
//     setTimeout(() => {
//         box.style.display = 'none';
//     }, 300);
//     e.stopPropagation();
// });

// // Close box when clicking outside (but not on the circle)
// document.addEventListener('click', (e) => {
//     // Only close if the click is outside both the box and circle
//     if (box.style.display === 'flex' && 
//         !box.contains(e.target) && 
//         e.target !== circle) {
//         box.style.transform = 'scale(0.9)';
//         box.style.opacity = '0';
//         setTimeout(() => {
//             box.style.display = 'none';
//         }, 300);
//     }
// });

// // Add hover effect to circle
// circle.addEventListener('mouseenter', () => {
//     if (!isDragging) {
//         circle.style.transform = 'translate(-50%, -50%) scale(1.05)';
//     }
// });

// circle.addEventListener('mouseleave', () => {
//     if (!isDragging) {
//         circle.style.transform = 'translate(-50%, -50%) scale(1)';
//     }
// });

// // Handle window resize to keep circle within bounds
// window.addEventListener('resize', () => {
//     const radius = 50;
//     const maxX = window.innerWidth - radius;
//     const maxY = window.innerHeight - radius;
    
//     // Adjust position if circle is outside new boundaries
//     circleCenterX = Math.max(radius, Math.min(circleCenterX, maxX));
//     circleCenterY = Math.max(radius, Math.min(circleCenterY, maxY));
    
//     circle.style.left = circleCenterX + 'px';
//     circle.style.top = circleCenterY + 'px';
// });

alert('working');