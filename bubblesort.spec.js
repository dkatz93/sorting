describe('Bubble Sort', function(){
	
	//var swapTimes;

	// beforeEach(function(){
	// 	swapTimes = spyOn(window, "count").and.callThrough();
	// });


	// it('checks if swapCount is called', function(){
		
	// 	console.log(swapTimes.calls.count());
		
	// });

	it('handles an empty array', function(){
		expect(bubbleSort([])).toEqual([]);

	});

	it('handles single item', function(){
		var swapTimes = spyOn(window, "swapCount").and.callThrough();
		expect(bubbleSort([3,1,2,4])).toEqual([1,2,3,4]);
		expect(swapTimes.calls.count()).toBeGreaterThan(0);
	});

	it('handles multiple items', function(){
		expect(bubbleSort([3,4,2,12], [9,6,8,5])).toEqual([2,3,4,5,6,8,9,12]);
	});
});