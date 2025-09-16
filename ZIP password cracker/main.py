import pyzipper
import itertools
import string

def brute_force_zip(zip_file_path):
    characters = string.ascii_letters + string.digits + string.punctuation  # All uppercase, lowercase letters, digits, and special characters

    try:
        with pyzipper.AESZipFile(zip_file_path, 'r') as zip_file:
            print("Starting brute force...")

            password_length = 1  # Start with a password length of 1
            while True:
                print(f"Trying passwords with length: {password_length}")

                for password_tuple in itertools.product(characters, repeat=password_length):
                    password = ''.join(password_tuple)
                    try:
                        zip_file.extractall(pwd=password.encode('utf-8'))
                        print(f"Success! The password is: {password}")
                        return
                    except (RuntimeError, pyzipper.zipfile.BadZipFile, pyzipper.zipfile.LargeZipFile):
                        continue

                password_length += 1  # Increment the password length

    except FileNotFoundError:
        print(f"The file {zip_file_path} was not found.")

if __name__ == "__main__":
    zip_file_path = input("Enter the path to the ZIP file: ")
    brute_force_zip(zip_file_path)
