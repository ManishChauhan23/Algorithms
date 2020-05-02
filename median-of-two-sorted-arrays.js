/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.
*/


var findMedianSortedArrays = function(nums1, nums2) {
let nums3 = [];
let i = 0;
let j = 0;
while(i < nums1.length && j < nums2.length) {
  if(nums1[i] < nums2[j]) {
    nums3.push(nums1[i]);
    i++;
  } else if(nums1[i] > nums2[j]) {
    nums3.push(nums2[j]);
    j++;
  } else {
    nums3.push(nums1[i]);
    i++;
  }
};

while(i < nums1.length) {
  nums3.push(nums1[i])
  i++
}

while(j < nums2.length) {
  nums3.push(nums2[j])
  j++
}

if(nums3.length % 2 === 0) {
 return (nums3[nums3.length/2] + nums3[(nums3.length/2) - 1]) / 2;
} else {
  return nums3[Math.floor(nums3.length/2)]
}
};
