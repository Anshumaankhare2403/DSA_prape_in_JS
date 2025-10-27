const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let left = 0;
let right = height.length - 1;
let maxArea = 0;

while (left < right) {
    const width = right - left;
    const heights = Math.min(height[left], height[right]);
    const area = width * heights;

    maxArea = Math.max(maxArea, area);

    // Move the shorter line inward
    if (height[left] < height[right]) {
        left++;
    } else {
        right--;
    }
}

console.log(maxArea);


height.map(e => {

})