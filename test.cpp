#include<iostream>
#include "cppjsindex.hpp"

int main(int argc, char**argv) {

  if (argc < 2) {
    std::cout << "usage: test <key>" << std::endl;
    return 1;
  }
  std::cout << cppjsindex::index((const char *)argv[1]) << std::endl;
  
  return 0;
}
