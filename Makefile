all:
	g++ -std=c++11 -ggdb -o testcpp test.cpp

clean:
	rm -rf *.o *~ 
