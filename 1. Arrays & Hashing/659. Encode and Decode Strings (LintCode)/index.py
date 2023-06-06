class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """

    def encode(self, strs: list[str]) -> str:
        return ":".join([self.escape(s) for s in strs])

    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """

    def decode(self, str: str) -> list[str]:
        result = []
        currentWord = ""
        escaping = False
        for char in str:
            if escaping:
                if char == "\\":
                    currentWord += "\\"
                elif char == ":":
                    currentWord += ":"
                escaping = False
            else:
                if char == ":":
                    result.append(currentWord)
                    currentWord = ""
                elif char == "\\":
                    escaping = True
                else:
                    currentWord += char
        if currentWord:
            result.append(currentWord)
        return result

    def escape(self, str: str) -> list[str]:
        return str.replace("\\", r"\\").replace(":", "\:")


def test():
    testEscape()
    testEncode()
    testDecode()


EscapeTestCases = [
    ["\\", r"\\"],  # this is 1 slash ('\' -> '\\')
    [":", r"\:"],
    [r"\\", r"\\\\"],
    [":\:", r"\:\\\:"],
]


def testEscape():
    solution = Solution()
    for input, expected in EscapeTestCases:
        escaped = solution.escape(input)
        if escaped != expected:
            print("Expected [%s] but got [%s]" % (expected, escaped))
            raise Exception("TestEscape failed")
    print("TestEscape passed")


EncodeTestCases = [
    [["1", "2", "3"], "1:2:3"],
    [["1", ":", "3"], r"1:\::3"],
    [["1", "\\", "3"], r"1:\\:3"],
    [[":", "\\", ":\\", "\:", r"\\:"], r"\::\\:\:\\:\\\::\\\\\:"],
]


def testEncode():
    solution = Solution()
    for input, expected in EncodeTestCases:
        encoded = solution.encode(input)
        if encoded != expected:
            print("Expected %s but got %s" % (expected, encoded))
            raise Exception("TestEncode failed")
    print("TestEncode passed")


def testDecode():
    solution = Solution()
    for expected, input in EncodeTestCases:
        decoded = solution.decode(input)
        if decoded != expected:
            print("Expected %s but got %s" % (expected, decoded))
            raise Exception("TestDecode failed")
    print("TestDecode passed")


if __name__ == "__main__":
    test()
