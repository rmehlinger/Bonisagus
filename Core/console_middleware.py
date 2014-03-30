class ConsoleExceptionMiddleware:
    def process_exception(self, request, exception):
        import traceback
        import sys
        exc_info = sys.exc_info()
        print(''.join(traceback.format_exception(*(exc_info or sys.exc_info()))), file=sys.stderr)
        #print repr(request)
