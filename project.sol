// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserRegistry {
    struct User {
        uint256 id;
        uint256 balance;
    }

    User[] public users;

    function register(uint256 _id) public {
        for (uint256 i = 0; i < users.length; i++) {
            require(users[i].id != _id, "User ID already exists");
        }
        users.push(User(_id, 0));
    }

    function deposit(uint256 _id) public payable {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].id == _id) {
                users[i].balance += msg.value;
                return;
            }
        }
        revert("User not found");
    }

    function withdraw(uint256 _id, uint256 _amount) public {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].id == _id) {
                require(users[i].balance >= _amount, "Insufficient balance");
                users[i].balance -= _amount;
                payable(msg.sender).transfer(_amount);
                return;
            }
        }
        revert("User not found");
    }

    function getBalance(uint256 _id) public view returns (uint256) {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].id == _id) {
                return users[i].balance;
            }
        }
        revert("User not found");
    }

    function getUserCount() public view returns (uint256) {
        return users.length;
    }

    function getUserByIndex(uint256 _index) public view returns (uint256) {
        require(_index < users.length, "Index out of bounds");
        return users[_index].id;
    }
}
